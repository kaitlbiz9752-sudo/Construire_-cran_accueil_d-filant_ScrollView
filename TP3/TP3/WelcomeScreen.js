import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
        <ScrollView
            indicatorStyle="white"
            style={styles.container}
        >
            <Text style={styles.text}>
                Bienvenue dans l'application Mobile Academy.
                Ce texte d'accueil est volontairement long pour illustrer un cas réel.
                L'objectif est de permettre à l'utilisateur de faire défiler pour lire
                l'ensemble du message d'introduction, sans tronquer le contenu.
                {'\n\n'}
                Dans ce laboratoire, nous apprenons à utiliser le composant ScrollView
                de React Native pour gérer les contenus qui dépassent la taille de l'écran.
                {'\n\n'}
                Le ScrollView est un conteneur qui permet de faire défiler son contenu
                verticalement ou horizontalement. C'est très utile lorsque nous avons
                beaucoup d'informations à afficher.
                {'\n\n'}
                Nous avons également configuré l'indicateur de défilement pour qu'il
                soit blanc, ce qui le rend visible sur notre fond sombre. Cela améliore
                l'expérience utilisateur en montrant clairement qu'il y a du contenu
                supplémentaire à explorer.
                {'\n\n'}
                Le composant Text avec une grande taille de police (fontSize: 50)
                permet de rendre le texte bien visible, mais nécessite le défilement
                pour accéder à l'ensemble du contenu.
                {'\n\n'}
                Ajoute plusieurs phrases de description, de contexte, de consignes,
                afin que la hauteur totale dépasse clairement la taille de l'écran
                sur un smartphone standard.
                {'\n\n'}
                React Native offre de nombreux composants pour créer des interfaces
                mobiles riches et intuitives. ScrollView est l'un des plus importants
                pour gérer les longs contenus.
                {'\n\n'}
                N'hésitez pas à explorer les différentes propriétés de ScrollView
                comme horizontal, showsVerticalScrollIndicator, bounces, et bien
                d'autres pour personnaliser l'expérience de défilement.
                {'\n\n'}
                Merci d'utiliser Mobile Academy pour votre apprentissage du
                développement mobile avec React Native!
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        padding: 40,
        fontSize: 50,
        color: '#EDEFEE',
        textAlign: 'center',
    },
});
