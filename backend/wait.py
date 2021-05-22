from wsgi import app
from waitress import serve

serve(app, port=9000)