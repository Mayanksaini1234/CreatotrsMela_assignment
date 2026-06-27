// Pure, allocation-light formatters — safe to call inside render or memoize.

export function formatCompactNumber(value) {
    if (value < 1000) return `${value}`;
    if (value < 1_000_000) return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K`;
    return `${(value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1)}M`;
}

export function formatPercent(value, fractionDigits = 1) {
    return `${value.toFixed(fractionDigits)}%`;
}

export function formatSigned(value, fractionDigits = 1) {
    const sign = value > 0 ? "+" : "";
    return `${sign}${value.toFixed(fractionDigits)}%`;
}