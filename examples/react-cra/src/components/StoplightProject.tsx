import '@stoplight/elements/styles/elements.scss';

import { StoplightProject } from '@stoplight/elements';
import React from 'react';

export const StoplightProjectDocs: React.FC = () => {
  return <StoplightProject basePath="stoplight-project" workspaceSlug="elements" projectSlug="studio-demo" />;
};