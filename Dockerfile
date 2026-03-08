FROM nixos/nix:latest
WORKDIR /app
COPY . .
RUN nix-env -iA nixpkgs.python3
EXPOSE 8000
CMD ["python3", "-m", "uvicorn", "backend.app.main:app", "--host", "0.0.0.0"]