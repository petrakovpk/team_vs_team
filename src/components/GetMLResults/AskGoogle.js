const automl = require('@google-cloud/automl');
const fs = require('fs');
const csv = require('csv/lib/index');

// Create client for prediction service.
const client = new automl.v1beta1.PredictionServiceClient();

/**
 * Demonstrates using the AutoML client to request prediction from
 * automl tables using csv.
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const projectId = 'melodic-sunbeam-269110' // e.g., "my-gcloud-project";
const computeRegion = 'us-central1' // e.g., "us-central1";
const modelId = 'TBL1717327211423334400' //e.g., "TBL4704590352927948800";
 const filePath = '/Users/16679432/PycharmProjects/team_vs_team/ask.csv'
// e.g., "<resource>/<csv file>", `local csv file path`;

// Get the full path of the model.
const modelFullId = client.modelPath(projectId, computeRegion, modelId);

// Read the csv file content for prediction.
const stream = fs
  .createReadStream(filePath)
  .pipe(csv.parse())
  .on(`data`, function(data) {
    const values = [];

    for (const val of data) {
      values.push({stringValue: val});
    }

    // Set the payload by giving the row values.
    const payload = {
      row: {
        values: values,
      },
    };

    // Params is additional domain-specific parameters.
    // Currently there is no additional parameters supported.
    client
      .predict({
        name: modelFullId,
        payload: payload,
        params: {feature_importance: true},
      })
      .then(responses => {
        console.log(responses);
        console.log(`Prediction results:`);

        for (const result of responses[0].payload) {
          console.log(`Predicted class name: ${result.displayName}`);
          console.log(`Predicted class score: ${result.tables.score}`);

          // Get features of top importance
          const featureList = [];

          for (const feature of result.tables.tablesModelColumnInfo) {
            featureList.push({
              importance: feature.featureImportance,
              displayName: feature.columnDisplayName,
            });
          }
          // Sort features by their importance, highest importance first
          featureList.sort(function(a, b) {
            return b.importance - a.importance;
          });

          // Print top 10 important features
          console.log('Features of top importance');
          console.log(featureList.slice(0, 10));
        }
      })
      .catch(err => {
        console.error(err);
      });
  });
stream.read();