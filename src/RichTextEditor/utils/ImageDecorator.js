/* @flow */
import ImageSpan from "../EditorComponents/ImageSpan";
import { ENTITY_TYPE } from "draft-js-utils";

import { ContentBlock, ContentState } from "draft-js";

function findImageEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    if (entityKey != null) {
      let entity = contentState ? contentState.getEntity(entityKey) : null;
      return entity != null && entity.getType() === ENTITY_TYPE.IMAGE;
    }
    return false;
  }, callback);
}

export default {
  strategy: findImageEntities,
  component: ImageSpan
};
