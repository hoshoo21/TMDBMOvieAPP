import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 10,
    },
    poster: {
        width: "100%",
        height: 400,
        borderRadius: 10,
    },

    scrollContainer: {
        paddingBottom: 40, 
        backgroundColor: '#fff',
        
        },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1f2937',
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
    },
    avatarCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#e1e1e1',
    },
    bodyText: {
        fontSize: 14,
        color: '#374151',
        lineHeight: 20,
    }
});