FROM node

ADD . /dashboard
WORKDIR /dashboard

# <------------------------- BUILD -------------------------->
RUN npm install -q
# ENV NODE_ENV=production 
# ENV BABEL_ENV=production
RUN npm run build

# <---------- COPY CONTENT TO VOLUME FOR DEPLOYMENT ---------->
RUN mkdir /release
RUN cp -r build/* /release
VOLUME /release

# <------------------------- TESTS -------------------------->
# ARG CC_TEST_REPORTER_ID
# RUN curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter
# RUN chmod +x ./cc-test-reporter
# RUN ./cc-test-reporter before-build

RUN npm test
# RUN ./cc-test-reporter after-build -t lcov -r ${CC_TEST_REPORTER_ID}

# <------------------------- SERVE -------------------------->
RUN npm install -g serve
CMD serve -s build

