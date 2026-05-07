# Keyword Comparison with Google Trends

A Jupyter notebook that uses the Google Trends API to analyze and visualize search interest for keywords — both individually and comparatively — across regions and over time.

## Features

- **Regional Interest Analysis** — fetches the top countries searching for a given keyword and visualizes them as a bar chart and an interactive choropleth map
- **Trend Over Time** — plots how search interest for a keyword has changed over the past 12 months
- **Keyword Comparison** — overlays multiple keywords on a single time-series chart to compare their search popularity side by side

## Requirements

Install dependencies with:

```bash
pip install pytrends matplotlib seaborn plotly pandas
```

| Package | Purpose |
|---|---|
| `pytrends` | Unofficial Google Trends API wrapper |
| `pandas` | Data manipulation |
| `matplotlib` | Static charts |
| `seaborn` | Styled bar plots |
| `plotly` | Interactive choropleth maps |

## Usage

1. Open `KEYWORDCOMPARISON.ipynb` in Jupyter.
2. Set your target keyword in the configuration cell:
   ```python
   keyword = "cloud computing"
   ```
3. To compare multiple keywords, update the list:
   ```python
   kw_list = ["cloud computing", "data science", "machine learning"]
   ```
4. Run all cells in order.

## Notebook Structure

| Section | Description |
|---|---|
| Setup | Install and import libraries, initialize `TrendReq` |
| Regional Interest | Bar chart of top 15 countries by search interest |
| Choropleth Map | Interactive world map of search interest by country |
| Trend Over Time | Line chart of search interest over the past 12 months |
| Keyword Comparison | Multi-line chart comparing several keywords over time |

## Notes

- The choropleth map opens in your browser via `fig.show(renderer="browser")`.
- Google Trends data is normalized (0–100 relative interest), not absolute search volume.
- Repeated rapid requests to `pytrends` may trigger rate limiting from Google. Add delays between calls if needed.
