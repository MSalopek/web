import os
import json
import argparse


def generate_sql_inserts(input_file_path: str, output_file_path: str):
    with open(input_file_path, "r") as file:
        assets = json.load(file)

    sql_statements = []

    sql_statements.append("-- Initialize tokens")

    for asset in assets:
        sql = f"INSERT INTO tokens (symbol, name, coingecko_id) VALUES ('{asset['symbol']}', '{asset['symbol']}', '{asset['coingeckoId']}');"
        sql_statements.append(sql)

    mode = "a" if os.path.exists(output_file_path) else "w"
    with open(output_file_path, mode) as file:
        file.write("\n\n")  # Add some spacing after previous content
        file.write("\n".join(sql_statements))
        file.write("\n")


def main():
    parser = argparse.ArgumentParser(
        description="Generate SQL inserts from a JSON file of token data"
    )
    parser.add_argument("--input_file", help="Path to the input JSON file")
    parser.add_argument("--output_file", help="Path to the output SQL file")

    args = parser.parse_args()
    generate_sql_inserts(args.input_file, args.output_file)


if __name__ == "__main__":
    main()
