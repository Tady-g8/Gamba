package main

import (
	"encoding/json"
	"net/http"
)

type SigninRequest struct {
	Username string `json:"username"`
	Email    string `json:"email"`
}

func signinHandler(w http.ResponseWriter, r *http.Request) {
	var req SigninRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	row := db.QueryRow("SELECT id FROM users WHERE username = ? AND email = ?", req.Username, req.Email)

	var id int
	if err := row.Scan(&id); err != nil {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	w.WriteHeader(http.StatusOK)
}
