---
name: timezone
description: Show current times across Coach Juan's key locations. Use when Coach Juan says "timezone", "what time is it", "team times", "check the time in", or wants to know working hours for his clients or contacts.
---

# Timezone Dashboard

Show current times for Coach Juan's key locations. Run this bash command and display the results in a clean table:

```bash
echo "---"
echo "Location         | Timezone              | Local Time"
echo "---"
for tz in "Montreal:America/Toronto" "Toronto:America/Toronto" "Vancouver:America/Vancouver" "New York:America/New_York" "London:Europe/London"; do
  IFS=':' read -r label zone <<< "$tz"
  time=$(TZ="$zone" date +"%I:%M %p (%a)")
  printf "%-16s | %-21s | %s\n" "$label" "$zone" "$time"
done
echo "---"
```

Format the output as a clean table. After the table, add a one-line note about who's likely in working hours (9am-6pm local) right now.

Key locations:
- Montreal: Coach Juan (home base, PVRPOSE AI HQ)
- Toronto: Eastern Canada clients and prospects
- Vancouver: Western Canada clients
- New York: US-based clients and contacts
- London: International contacts
