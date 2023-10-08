import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';

const Main7 = () => {
    return (
        <View>
            <Navbar />
            <View>
                <ScrollView>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                </ScrollView>
                <View>
                    <View>
                        <Text>Total</Text>
                        <Text>$74.98</Text>
                    </View>
                    <TouchableOpacity>
                        <Text>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Main7;
