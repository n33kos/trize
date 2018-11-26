#!/usr/bin/env bash

echo -n "Generating Documentation";

# Delete old readme files
find src -type f -name 'README.md' -delete;

# Generate per directory docs
find src -name "*.js" -print0 | while IFS= read -r -d $'\0' line; do
    # Get filename for replacement
    FILENAME="$(echo $line | sed 's/.*\///')";

    # Replace filename with README.md
    READMEPATH="$(echo $line | sed s/${FILENAME}/README.md/)";

    # Add documentation to directory level README
    jsdoc2md ${line} >> ${READMEPATH};

    echo -n ".";
done

# Generate top level doc
find src -name "*.js" -exec jsdoc2md {} + > src/README.md

echo "Done!";
