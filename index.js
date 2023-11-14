

import Replicate from "replicate";

const replicate = new Replicate({
  // get your token from https://replicate.com/account
  auth: "r8_PY3idNhKCnHVgryYEX4a30wj7UieZsp0RN42w", // defaults to process.env.REPLICATE_API_TOKEN
});

const model = "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478";
const input = {
  prompt: "a 19th century portrait of a raccoon gentleman wearing a suit",
};
const output = await replicate.run(model, { input });
// ['https://replicate.delivery/pbxt/GtQb3Sgve42ZZyVnt8xjquFk9EX5LP0fF68NTIWlgBMUpguQA/out-0.png']