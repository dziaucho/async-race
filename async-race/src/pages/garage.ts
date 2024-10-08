import BaseTag from "../elements/base";
import InputTag from "../elements/input";
import SVGCar from "../elements/svg-car";

const garageSection: BaseTag<HTMLElement> = new BaseTag<HTMLElement>(
  "section",
  "garage-section",
  document.body,
);

const garageHeading: BaseTag<HTMLHeadElement> = new BaseTag<HTMLHeadElement>(
  "h2",
  "garage-heading",
  garageSection,
);

const garageWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
  "div",
  "garage-wrapper",
  garageSection,
);

const leftGarageWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
  "div",
  "left-garage-wrapper",
  garageWrapper,
);

export const rightGarageWrapper: BaseTag<HTMLDivElement> =
  new BaseTag<HTMLDivElement>("div", "right-garage-wrapper", garageWrapper);

const previewWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
  "div",
  "preview-wrapper",
  leftGarageWrapper,
);

export const carPreview: SVGCar = new SVGCar("car-preview", previewWrapper);

const inputModelWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
  "div",
  "input-model-wrapper",
  previewWrapper,
);

const inputModel: InputTag<HTMLInputElement> = new InputTag<HTMLInputElement>(
  "input",
  "input-model",
  inputModelWrapper,
  "text",
  "input your model",
);

export const colorPick: InputTag<HTMLInputElement> =
  new InputTag<HTMLInputElement>(
    "input",
    "color-pick",
    inputModelWrapper,
    "color",
    undefined,
    "#000000",
  );

export const buttonCreate: BaseTag<HTMLButtonElement> =
  new BaseTag<HTMLButtonElement>("button", "button-create", inputModelWrapper);

const modelWrapper: BaseTag<HTMLDivElement> = new BaseTag<HTMLDivElement>(
  "div",
  "model-wrapper",
  leftGarageWrapper,
);

const carModelText: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "car-model-text", modelWrapper);

const carModelValue: BaseTag<HTMLParagraphElement> =
  new BaseTag<HTMLParagraphElement>("p", "car-model-value", modelWrapper);

garageHeading.elem.innerText = "garage";
buttonCreate.elem.innerText = "create";
carModelText.elem.innerText = "model:";
inputModel.elem.setAttribute("required", "true");
