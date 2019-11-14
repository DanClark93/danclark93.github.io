// @flow

type Camelise = string => string;
const camelise: Camelise = str =>
  str.replace(/-([a-z])/g, g => g[1].toUpperCase());

export type Attributes = {
  [string]: string,
};
type ProcessAttributes = NamedNodeMap => Attributes;
export const processAttributes: ProcessAttributes = attributes =>
  [...attributes].reduce(
    (acc, attribute) => ({
      ...acc,
      [camelise(attribute.name)]: attribute.value,
    }),
    {}
  );
