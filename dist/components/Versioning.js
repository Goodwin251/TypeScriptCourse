export const createVersionedContent = (content) => {
    return { ...content, version: 1 };
};
export const updateVersionedContent = (versionedContent, updates) => {
    const newVersion = {
        ...versionedContent,
        ...updates,
        version: versionedContent.version + 1,
        previousVersion: { ...versionedContent },
    };
    delete newVersion.previousVersion.previousVersion; // Обмеження глибини
    return newVersion;
};
