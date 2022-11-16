import { extendTheme } from "@chakra-ui/react";

const myTheme = extendTheme( {
    colors: {
       
        input : {
            100: "#FEEBC8",
            900: "#7B341E"
        }
        
    },
    shadows: {
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "bold",
                borderRadius: "md",
                _focus: {
                    boxShadow: "none"
                }
            },
            variants: {
                auth: {
                    bg: "authButton.100",
                    color: "white",
                    _hover: {
                        bg: "authButton.900",
                        color: "white"
                    }
                },
                mode: {
                    bg: "modeButton.100",
                    color: "modeButton.900",
                    _hover: {
                        bg: "modeButtonHover.100",
                        color: "modeButtonHover.900"
                    }
                }
            }
        },
        Input: {
            baseStyle: {
                borderRadius: "md",
                _focus: {
                    boxShadow: "none"
                }
            },
            variants: {
                auth: {
                    bg: "input.100",
                    color: "input.900",
                    _hover: {
                        bg: "input.900",
                        color: "input.100"
                    }
                }
            }
        }
    }
} );

export default myTheme;