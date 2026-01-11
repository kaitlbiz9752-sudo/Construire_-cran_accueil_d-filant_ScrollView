import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppFooter() {
    return (
        <View style={styles.container}>
            <Text style={styles.footerText}>
                © 2026 Mobile Academy - Tous droits réservés
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EE9972',
        padding: 15,
    },
    footerText: {
        fontSize: 14,
        color: '#EDEFEE',
        textAlign: 'center',
    },
});
