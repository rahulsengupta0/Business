from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import joblib

data = [
    ("What is your service?", "We offer credit repair education."),
    ("How do I fix credit?", "Start by removing negative items and building positive trade lines."),
    ("How much is the program?", "Our plans start at $99 per month."),
    ("Do you help with student loans?", "Yes, we help clients with student loan remedies."),
]

questions, answers = zip(*data)


vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(questions)

model = MultinomialNB()
model.fit(X, answers)

joblib.dump(model, "chat_model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")
print("Model trained and saved.")
