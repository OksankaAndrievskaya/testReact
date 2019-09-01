if [ ! -x /usr/bin/wget ] ; then
   command -v wget >/dev/null 2>&1 || { echo >&2 "Please install wget or set it in your path. Aborting."; exit 1; }                                                                                               
fi
echo 'Unfortunately, theres currently no plugin that we are aware of and that analyzes SCSS files.'
echo 'so, sorry we need to w8 ^_^/'
wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-3.3.0.1492-linux.zip
unzip sonar-scanner-cli-3.3.0.1492-linux.zip
./sonar-scanner-3.3.0.1492-linux/bin/sonar-scanner -Dsonar.projectKey=platform-react-market-place -Dsonar.sources=./ -Dsonar.exclusions=**/node_modules/**,**/*.spec.ts -Dsonar.host.url=http://18.184.131.27 -Dsonar.login=admin -Dsonar.password=3967b4258daf -Dsonar.language=ts -Dsonar.analysis.mode=publish -Dsonar.sourceEncoding=UTF-8
rm -rf sonar-scanner-cli-3.3.0.1492-linux.zip sonar-scanner-3.3.0.1492-linux
echo 'finished analizing sia \^_^'
