import { StyleSheet } from 'react-native';
import colors from './colors';

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingBottom: 10,
    },
    listContainer: {
        paddingLeft: 15, // Aligns the start of the list with the header text
    },
    content: {
        paddingTop: 10,
        paddingBottom: 20,
        borderTopWidth: 1,
        backgroundColor: colors.primary, 
        borderTopColor: colors.border,
    },
    icon: {
        fontSize: 14,
        color: colors.textSecondary,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 15,
        backgroundColor: colors.secondary, // Slightly different background for the "button"
    },
    sectionWrapper: {
        marginBottom: 10,
        backgroundColor: colors.primary,
        borderRadius: 8,
        overflow: 'hidden', // Ensures content doesn't bleed over rounded corners
        borderWidth: 1,
        borderColor: colors.secondary, // Light gray border
        marginHorizontal: 15,
    },  
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10,
        color:colors.textPrimary
    },  
    poster: {
        width: "100%",
        height: 400,
        borderRadius: 10,
    },

    scrollContainer: {
        paddingBottom: 40, 
        backgroundColor:colors.primary,
        
        },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color:colors.text,
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        color:colors.text,
        marginBottom: 10,
    },
    avatarCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.border,
    },
    bodyText: {
        fontSize: 14,
        color: colors.textSecondary,
        lineHeight: 20,
    },
    chipCard: {
        backgroundColor: colors.secondary, // Light gray background
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25, // Fully rounded "pill" shape
        marginRight: 10,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center',
        // Minimal shadow for depth
        elevation: 2,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    chipText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.text, // Dark gray for readability

    },
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Use this if you want a grid, or omit for a single row
        padding: 10,
    },
    genreChip: {
        flexDirection:'row',
        backgroundColor: colors.secondary,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 5,
        borderWidth: 1,
        borderColor: colors.border,
    },
    genreText: {
        fontSize: 14,
        color: colors.text,
        fontWeight: '600',
    },
});