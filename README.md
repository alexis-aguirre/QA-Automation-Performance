# QA-Automation-Performance

## Run tests

<code>
$ . ./.env 
$ artillery run performance.yml
</code>

<br>
<br>

## Run tests with html report
<code>
$ . ./.env 
$ mkdir -p results && artillery run --output results/report.json performance.yml && artillery report --output results/report.html results/report.json
</code>

## Run tests from npm
<code>
$ npm run test
</code>

## Notes:
This API has a simultaneous requests limit. If run with current parameters, it will return status code 429 (Too many requests). This values are with didactic purposes and won't return successful results.