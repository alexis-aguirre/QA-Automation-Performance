# QA-Automation-Performance

## Run tests

<code>
$ artillery run performance.yml
</code>

<br>
<br>

## Run tests with html report
<code>
$ mkdir -p results && artillery run --output results/report.json performance.yml && artillery report --output results/report.html results/report.json
</code>

## Run tests from npm
<code>
$ npm run test
</code>