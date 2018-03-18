#! /bin/bash
#move scripts to bin
cp ~/Patiobar/scripts/panstart ~/bin/panstart
cp ~/Patiobar/scripts/pbstart ~/bin/pbstart
cp ~/Patiobar/scripts/pbstop ~/bin/pbstop
echo Files moved
#set permissions on scripts
chmod u+x ~/bin/panstart
chmod u+x ~/bin/pbstart
chmod u+x ~/bin/pbstop
echo permissions set
