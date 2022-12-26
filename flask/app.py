from flask import * # импорт из библиотеки класс flask
from flask_sqlalchemy import *

app = Flask(__name__) # создаём экземпляр класса и в конструкторе передаём имя файла __name__ - это файл app
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite'

@app.route('/') # декоратор(надеюсь вспомнил что это) который проверяет url-адресс
@app.route('/sbp')
def index():
    return render_template("index.html")  # всё просто проверка работы 

if __name__ == '__main__':
    app.run(debug=True)