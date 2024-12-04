import os
from flask import Flask, request, jsonify
import openai
from flask_cors import CORS

# OpenAI API anahtarını çevresel değişkenlerden almak
openai.api_key = "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"  # Buraya doğru anahtarınızı yazın

app = Flask(__name__)
CORS(app)  # CORS desteği ekler

@app.route('/chat', methods=['POST'])
def chat():
    try:
        # Gelen JSON verisini al
        data = request.get_json()
        user_message = data.get('message')

        if not user_message:
            return jsonify({'error': 'No message provided'}), 400

        # OpenAI API istek gönderme
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # Modeli belirtin
            messages=[{"role": "user", "content": user_message}],  # Kullanıcı mesajını bu formatta gönderin
            max_tokens=350,
            temperature=0.7
        )   

        # OpenAI API yanıtını yazdır
        print(response)

        # AI yanıtını çıkart
        ai_message = response['choices'][0]['message']['content'].strip()
        return jsonify({'response': ai_message})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
