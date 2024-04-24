import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity, } from 'react-native';

/* Project Chelsea Restaurant Reviews screen-
   These are the included feature and items held within this screen:

   - Navigation bar that continues from all other screens in the app
   - A banner that displays the Restaurant's Review and "stars"
   - A scrollable list of reviews
   - Place holders for the star counters (shown as circles)
*/

const RestaurantReviewsPage = () => {

        const [isModalVisible, setIsModalVisible] = useState(false);
        const [modalIndex, setModalIndex] = useState(null);
        
        //Checks which modal is being looked at
        const toggleModal = (index) => {
            setIsModalVisible(!isModalVisible);
            setModalIndex(index);
        };

        //Creates new modals (pop ups) with information listed
        const reviewData = [
            { id: 1, title: 'Comment:', content: 'eway ereway erethay elebratingcay ayay iendsfray irthdaybay. eway adhay ayay argelay oupgray osay eythay eatedsay usyay inyay ethay ackbay oomray ichwhay asway eatgray osay eway ouldcay eelyfray onversecay andyay earhay eachyay otheryay easilyyay ithoutway isturbingday everyoneyay. ouryay erversay (i inkthay erhay amenay asway ebray?) asway antasticfay. eryvay unfay andyay attentiveyay andyay idday ayay eatgray objay. ethay oodfay asway excellentyay asyay alwaysyay.' },
            { id: 2, title: 'Comment:', content: 'atthay oodfay asway eliciousday amecay inyay othay ichwhay asway ayay usplay. eway adhay enoughyay oodfay andyay ooktay omesay omehay. eway enjoyedyay ethay oupsay ootay! ervicesay asway eatgray! illway efinitelyday ogay ackbay.' },
            { id: 3, title: 'Comment:', content: 'oodfay asway eallyray oodgay ervicesay asway owslay. ityay ooktay ayay ittlelay ongerlay otay etgay ouryay oodfay.' },
            { id: 4, title: 'Comment:', content: 'esethay estaurantsray areyay eryvay elegantyay ithway optay ofyay ethay inelay aitersway. eway owshay upyay itsay ownday ightray awayyay andyay orderyay ouryay oodfay. ouryay aiterway ooktay ouryay oodfay outyay inyay 15 inutesmay afteryay eway orderyay. alktay aboutyay ethay estbay inyay estaurantray usinessbay. iyay avegay ymay aiterway 20% ofyay ymay iptay andyay ereway eryvay appyhay ithway ouryay oodfay andyay ervicesay.' },
            { id: 5, title: 'Comment:', content: 'amecay inyay orfay innerday astlay ightnay, ervicesay asway oodgay andyay oodfay asway eliciousday. oughtthay ityay asway ayay itbay oddyay enwhay eway alkedway inyay andyay erethay asway ayay oungeryay ostesshay eatingyay eadsticksbray ehindbay ethay allsmay ountercay andyay ookinglay upyay atyay usyay. iyay awsay erhay eatingsay eoplepay afteryay iyay entway otay ethay estroomray. eatgray overallyay experienceyay oughthay!' },
            { id: 6, title: 'Comment:', content: 'iedfray itizay asway eliciousday!' },
            { id: 7, title: 'Comment:', content: 'oliceyay ardengay asgay eatgray ewnay ecialssppay andyay eemssay otay endsay omotionspray ybay emailyay ifyay ouyay antway otay eceiveray emthay. ethay affstay isyay eryvay iendlyfray andyay ofyay oursecay ethay oodfay isyay onderfulway andyay eshfray. ovelay uppazay andyay armigianpay andrewyay. ethay erversay upersay icenay.' },
            { id: 8, title: 'Comment:', content: 'oodfay asway eallyray oodgay ervicesay asway owslay. ityay ooktay ayay ittlelay ongerlay otay etgay ouryay oodfay.' }
            
        ];

        return (
            <View>
                {/* This makes the stagnant review rating on the screen */}
                <View style={{ flexDirection: 'row', width: '100%', height: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: seaShell }}>

                    {/* Displays the rating number. Please attach to algarithm for calculating score 4/18/2024 */}
                    <Text style={{ ...styles.sectionHeadText, paddingLeft: 5 }}>
                        ##
                    </Text>

                    {/* This is the holder for the big stars on the top of the screen please replace with real stars and
                    an algarithom for the ability to calulate the display of stars 4/18/2024 */}
                    <View style={{ flexDirection: 'row', paddingTop: 5, paddingLeft: 5 }}>
                        <View style={styles.bigStarHolder}></View>
                        <View style={styles.bigStarHolder}></View>
                        <View style={styles.bigStarHolder}></View>
                        <View style={styles.bigStarHolder}></View>
                        <View style={styles.bigStarHolder}></View>
                    </View>
                </View>
        
                {/* Scroll through reviews */}
                <ScrollView style={{ height: '90%' }}>

                    {/* This map thing right here makes it so you can generate the reviews with a given format and just different
                    id values!!! And the key checks which id you are on.*/}
                    {reviewData.map((review, index) => (
                        <View style={{ ...styles.container }} key={review.id}>
        
                            <TouchableOpacity onPress={() => toggleModal(index)}>
                                <View style={{ ...styles.reviewBox, flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ ...styles.boxText, fontWeight: 'bold', marginLeft: 15, marginRight: 5 }}>Rating: ##</Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                            <View style={styles.littleStarHolder}></View>
                                            <View style={styles.littleStarHolder}></View>
                                            <View style={styles.littleStarHolder}></View>
                                            <View style={styles.littleStarHolder}></View>
                                            <View style={styles.littleStarHolder}></View>
                                        </View>
                                    </View>
                                    <Text style={{ ...styles.boxText, fontWeight: 'bold', marginLeft: 15, marginRight: 5 }}>{reviewData[index].title}</Text>
                                    <Text style={{ ...styles.boxText, marginLeft: 15, marginRight: 5 }}>

                                        {/* The review dataData pulls the info asked for from the id */}
                                        {
                                            reviewData[index].content.length>80 ? reviewData[index].content.substring(0,80)+"..." : reviewData[index].content
                                        }
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            
                            {/* The extra code on the visible part is so that it knows not to open ALL the modals */}
                            <Modal visible={isModalVisible && modalIndex === index} animationType="slide" transparent={true}>
                                <View style={{ ...styles.modalContainer }}>
                                    <View style={styles.modalContent}>

                                        {/* The toggleModal(null) makes sure it closes the CURRENT modal */}
                                        <TouchableOpacity onPress={() => toggleModal(null)}>
                                            <Text style={styles.closeButton}>Exit</Text>
                                        </TouchableOpacity>
                                        
                                        {/* The review dataData pulls the info asked for from the id */}
                                        {reviewData[index] ? (
                                            <>
                                                <Text style={{ fontWeight: 'bold' }}>Rating: ##</Text>
                                                <Text style={{ fontWeight: 'bold' }}>{reviewData[index].title}</Text>
                                                <Text style={styles.boxText}>{reviewData[index].content}</Text>
                                            </>

                                        ) : (
        
                                                <Text>No review data available</Text>
                                            )}
                                        {/* The funny symbols are basically an if else */}
                                        
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
};

//Color variables
const seaShell = '#fef4f0';
const beanBrown = '#331507';
const byzBlue = '#0E4FDB';
const utOrange = '#EF8833';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: byzBlue,
        alignItems: 'left',
        justifyContent: 'top',
    },
    reviewBox: {
        width: 373,
        height: 100,
        borderRadius: 10,
        backgroundColor: utOrange,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: seaShell,
        margin: 10,
    },
    bigStarHolder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: utOrange,
        marginHorizontal: 5,
    },
    littleStarHolder: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: byzBlue,
        marginHorizontal: 5,
    },
    sectionHeadText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: beanBrown,
        textAlign: 'center',
        paddingTop: 10,
        textAlign: 'left',
        marginLeft: 5,
    },
    boxText: {
        fontSize: 16,
        color: beanBrown,
        justifyContent: 'flex-start'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
      modalContent: {
        maxHeight: '90%',
        width: '90%',
        backgroundColor: seaShell,
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        overflow: "scroll",
    },
      closeButton: {
        alignSelf: 'flex-end',
        color: byzBlue,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default RestaurantReviewsPage;