test('Nucl', () => {
    const containerStyle = {
        margin: 0,
        minHeight: '100vh',
        display: 'grid',
        placeContent: 'center',
        color: '#1f2020',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '1.1rem',
        backgroundColor: '#F9F6EF',
        backgroundImage: `
            radial-gradient(circle, #F9F6EF, #EBEBE3),
            radial-gradient(at 100% 20%, #5EB0E525, #0000 70%),
            radial-gradient(at 20% 20%, #F3D06025, #0000 70%),
            radial-gradient(at 20% 100%, #A5282C25, #0000 70%),
            radial-gradient(at 100% 100%, #AEE1CD25, #0000 70%)
        `,
        backgroundBlendMode: 'darken',
    };

    expect(containerStyle).toEqual({
        margin: 0,
        minHeight: '100vh',
        display: 'grid',
        placeContent: 'center',
        color: '#1f2020',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '1.1rem',
        backgroundColor: '#F9F6EF',
        backgroundImage: `
            radial-gradient(circle, #F9F6EF, #EBEBE3),
            radial-gradient(at 100% 20%, #5EB0E525, #0000 70%),
            radial-gradient(at 20% 20%, #F3D06025, #0000 70%),
            radial-gradient(at 20% 100%, #A5282C25, #0000 70%),
            radial-gradient(at 100% 100%, #AEE1CD25, #0000 70%)
        `,
        backgroundBlendMode: 'darken',
    });
});