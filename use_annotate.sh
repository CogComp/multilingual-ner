COGCOMP=/shared/ruohaog/ccg/cogcomp-nlp/ner/
pushd $COGCOMP
lang=$1


#if [ "$lang" != "eng" ]
#then
#echo $lang
config=/shared/ruohaog/ccg/config/${lang}.config 
#./scripts/demo.sh $config
input=/shared/ruohaog/demo/server/input
output=/shared/ruohaog/demo/server/output
format="-c"
./scripts/annotate.sh $input $output $format $config

# This default setting takes much longer time   
#else
#    #echo $lang
#    #./scripts/demo.sh
#    input=/shared/ruohaog/demo/server/input
#    output=/shared/ruohaog/demo/server/output
#    config=./config/ner.properties
#    format="-c"
#    ./scripts/annotate.sh $input $output $format $config
#fi

popd
