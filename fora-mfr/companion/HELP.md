## VARIABLES

    * Implemented
        -   outputs ( available destinations )
        -   inputs ( available sources )
        -   level ( router crosspoint level )
        -   id ( router unit ID )
        -   dst## ( the ascii name assigned to each available destination )
        -   src## ( the ascii name assigned to each available source )
        -   selected_dst_name ( for bank labelling and feedback )
        -   selected_dst_id ( used for actions requiring hex id of port of destination )
        -   selected_src_name ( for bank labelling and feedback )
        -   selected_src_id ( used for actions requiring hex id of port of destination )
        -   video_format ( format of video processed by router )
        -   video_reference ( auto | blackburst | tri-level )
        -   switching_point ( field | odd | even )


## ACTIONS

    * Implemented
        >   Router config
            -   Preset video format
            -   Apply preset video format
            -   Cancel preset video format
            -   rename a dst or src. Needs to account for updating 'selected' variable values if renamed item matches selections
        >   Switching operation
            -   Set destination
            -   Set source
            -   Switch crosspoint
            -   Preset crosspoint
            -   Switch preset crosspoint(s)
            -   lock / unlock dst
    * ToDo (?)
        >   Switching operation
            -   reinitialize unit ( advise caution )


## FEEDBACKS

    * Implemented
        - Routed destination ( true if selected source is routed to this destination xpt - blinbks if selected destination is not routed to selected source)
        - Selected destination ( true if this destination is currently selected/pressed)
        - Locked destination ( true if this destination is locked )
        - Routed source ( true if this source is routed to the selected destination xpt )
        - Selected source ( true if this source is currently selected/pressed)
                       
    * ToDo
        - general improvements - not particularly happy with certain behaviours but it's good enough for now 

## PRESETS

    * Implemented
        > Control
            - Cut selected src to selected dst (shows selection values)
            - Preset xpt with selected src and dst (shows selection values)
            - Cut all preset xpts
            - Preset video format
            - Apply preset video format
            - Cancel preset video format
            - Rename destination
            - Rename source
            - Lock / unlock destination
        > Destinations
            - Preset for each available destination with the following properties;
                > Actions
                    - select destination
                > Feedbacks
                    - Routed destination ( true if selected source is routed to this destination xpt - blinbks if selected destination is not routed to selected source)
                    - Selected destination ( true if this destination is currently selected/pressed)
                    - Locked destination ( true if this destination is locked )
        > Source
             - Preset for each available source with the following properties;
                > Actions
                    - select source
                > Feedbacks
                    - Routed source ( true if this source is routed to the selected destination xpt )
                    - Selected source ( true if this source is currently selected/pressed)
    * ToDo


## COMMAND REFERENCE

## For.A MFR Series 3G/HD/SD/ASI Routing Switchers

     * Basic specification
         -   Port number 49152 - 65534 (default : 23)
         -   Maximum clients : 16
         -   Wait for Echo before sending next command
         -   No password required

## Commands available by connecting using LAN

\*1 When commands are sent via LAN, an Echo, Prompt, S response and other response messages may be included in a single packet or divided into two or more packets. Therefore, do not process commands in a per packet basis but a per stream basis.

\*2 A command protocol should be selected in the [Web-based Control: Port Settings page].

If "Crosspoint remote control 2" is not enabled some functionality is not available.

     *2  To enable "Crosspoint remote control 2" commands
         -   navigate to the switcher's web interface;
             System Settings > Router System Settings > Port Settings
         -   In the TCP/IP section set "Default Function" to "Crosspoint remote control 2"
         -   In the Command Response section make sure that Echo, C and S responses are checked
         -   Send changes in order to save changes to system

## Control command list

## Crosspoint remote control / Crosspoint remote control 2

1.  Commands (S?) for requesting the crosspoints list

        - Control command   =>  @[sp]S?<Lvl>
        - Command response  <=  S:<Lvl><Dest>,<Src>

2.  Commands (X?) for requesting information on crosspoints (by specifying a destination and level.)

        - Control command   =>  @[sp]X?<Lvl><Dest>
        - Command response  <=  S:<Lvl><Dest>,<Src>

3.  Commands (X:) for switching over a crosspoint (single channel)

        - Control command   =>  @[sp]X:<Lvls>/<Dest>,<Src>
        - Command response  <=  S:<Lvl><Dest>,<Src>
                            <=  C:<Lvls>/<Dest>,<Src>[.....[S<Salvo number>][L<Link number>]]:I<ID>

4.  Commands for switching over crosspoints (multi-channel simultaneous switchover)

         - Control command
             Clear a preset crosspoint.  =>  @[sp]B:C
         - Command response

         - Control command
             Preset a crosspoint.    =>  @[sp]P:<Lvl>/<Dest>,<Src>
         - Command response

         - Control command
             Read a preset crosspoint specifying a level and destination.    =>  @[sp]P?<Lvl><Dest>
         - Command response  <=  V:<Lvl><Dest>,<Src>

         - Control command
             Read preset crosspoints for all channels in the specified level.    =>  @[sp]V?<Lvl>
         - Command response  <=  V:<Lvl><Dest>,<Src>

         - Control command
             Perform the preset crosspoints simultaneously.  =>  @[sp]B:E
         - Command response  <=  S:<Lvl><Dest>,<Src>
                             <=  C:<Lvls>/<Dest>,<Src>[.....[S<Salvo number>][L<Link number>]]:I<ID>

5.  Commands (W:) for locking a destination

        - Control command
            LOCK ALL units. =>  @[sp]W:<Lvl>/<Dest>,<ID>,1
        - Command response
                            <=  W!<Lvl><Dest>,<ID>,1

        - Control command
            LOCK OTHER units.   =>  @[sp]W:<Lvl>/<Dest>,<ID>,2
        - Command response
                            <=  W!<Lvl><Dest>,<ID>,2

        - Control command
            Disable LOCK.   =>  @[sp]W:<Lvl>/<Dest>,<ID>,0
        - Command response
                            <=  W!<Lvl><Dest>,<ID>,0

6.  Commands (Z:) for reinitializing a unit

         - Control command   =>  @[sp]Z:<Lvls>
         - Command response  <=  S:<Lvl><Dest>,<Src>
                             <=    C:<Lvls>/<Dest>,<Src>[.....[S<Number of crosspoints in Salvo>][L<Number of Links>]]:I<ID>

7.  Commands (F?) for requesting System Size

        - Control command   =>  @[sp]F?<Lvl>
        - Command response  <=  F:<Lvl><Dst Size>,<Src Size>/< Dst Size >,<Src Size>

## Crosspoint remote control 2 only

7.  Commands (K?) for requesting input/output channel names

        - Control command   =>  @[sp]K?<SorD><AorK>,<Ofset>
        - Command response  <=  K:<SorD><AorK><No.>,<Dat>

8.  Commands (A?) for requesting CPU status.

        - Control command   =>  @[sp]A?
        - Command response
            If CPU is active:   <=  @[sp]A:<ID>
            If CPU is passive:  <= (no response)

9.  Commands (W?) for requesting Destination Lock status.

        - Control command   =>  @[sp]W?<Lvl>,<Dest>
        - Command response  <=  W!<Lvl><Dest>,<ID>,0-2*
                                *0: Nothing locked
                                1: LOCK ALL
                                2: LOCK OTHER

10. Commands (K:) for importing signal names

        - Control command   =>  K:<SorD><SorLorA><No.>,<Dat>

11. Commands for setting video format (reference and/or switching point).

        - Control command
        Preset video format, reference and switching point. =>  @[sp]UF:<YY>/<R#>,<S$>
        - Command response  <=  UF!<YY>/<R#>,<S$>

        - Control command
        Set preset settings. =>  @[sp]UE:A
        - Command response  <=  UR!W
                            <=  UR!<YY>/<R#>,<S$>
                            <=  UR!E(Error response)

        - Control command
        Cancel preset settings. =>  @[sp]UE:C
        - Command response  <=  UR!C
