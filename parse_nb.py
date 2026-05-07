import json
with open('KEYWORDCOMPARISON.ipynb', 'r', encoding='utf-8') as f:
    nb = json.load(f)
for cell in nb.get('cells', []):
    ctype = cell.get('cell_type', 'unknown')
    src = cell.get('source', [])
    first_line = src[0].strip() if src else ''
    print(f"{ctype.upper()}: {first_line[:100]}")
