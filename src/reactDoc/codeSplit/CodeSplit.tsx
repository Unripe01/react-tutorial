import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./CodeSplitOtherComponent'));

function CodeSplit() {
  return (
    <div>
      <Suspense fallback={<div>ローディング...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

export default CodeSplit;