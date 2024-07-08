include .env

.PHONY: upgrade
upgrade:
	bun upgrade

.PHONY: run
run:
	cd app; bun run dev

.PHONY: install
install:
	cd app; bun install
