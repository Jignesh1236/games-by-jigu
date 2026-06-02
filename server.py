import os
import re
import urllib.request
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler

UGS_RAW = "https://raw.githubusercontent.com/bubbls/UGS-Assets/main"
UGS_CDN = "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@main"

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/proxy':
            self._proxy(parsed.query)
        else:
            super().do_GET()

    def _proxy(self, query):
        params  = urllib.parse.parse_qs(query)
        folder  = params.get('g', [''])[0]
        file    = params.get('f', ['index.html'])[0]

        if not folder:
            self.send_error(400, "Missing game name")
            return

        raw_url  = f"{UGS_RAW}/{urllib.parse.quote(folder, safe='')}/{urllib.parse.quote(file, safe='')}"
        cdn_base = f"{UGS_CDN}/{urllib.parse.quote(folder, safe='')}/"

        try:
            req = urllib.request.Request(
                raw_url,
                headers={"User-Agent": "Mozilla/5.0", "Accept": "text/html,*/*"}
            )
            with urllib.request.urlopen(req, timeout=15) as resp:
                html = resp.read().decode("utf-8", errors="replace")
        except urllib.request.HTTPError as e:
            self.send_error(e.code, f"Game not found: {folder}")
            return
        except Exception as e:
            self.send_error(502, str(e))
            return

        # Inject <base> right after <head> (if not already present)
        if not re.search(r"<base\b", html, re.I):
            base_tag = f'<base href="{cdn_base}">'
            if re.search(r"<head[^>]*>", html, re.I):
                html = re.sub(
                    r"(<head[^>]*>)", r"\g<1>" + base_tag,
                    html, count=1, flags=re.I
                )
            else:
                html = base_tag + html

        body = html.encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type",  "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("X-Frame-Options", "ALLOWALL")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        # quiet down proxy spam; keep everything else
        if args and "/proxy" in str(args[0]):
            return
        super().log_message(fmt, *args)

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    print("Game proxy server running on port 5000")
    HTTPServer(("0.0.0.0", 5000), Handler).serve_forever()
