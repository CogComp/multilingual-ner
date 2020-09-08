COGCOMP=/shared/ruohaog/ccg/cogcomp-nlp/ner/
pushd $COGCOMP
lang=$1
id=$2
tmp_dir=/shared/ruohaog/demo/multilingual-demo/scripts/tmp


if [ "$lang" != "eng-default" ]
then
    echo $lang
    config=/shared/ruohaog/ccg/config/${lang}.config 
    input=$tmp_dir/input/$id
    output=$tmp_dir/output/$id
    #input=/shared/ruohaog/demo/multilingual-demo/scripts/tmp/input
    #output=/shared/ruohaog/demo/multilingual-demo/scripts/tmp/output
    format="-c"
    ./scripts/annotate.sh $input $output $format $config  
    #echo "................"
    #echo $input
    #echo $output
    
   
# This default setting takes much longer time   
else
    echo $lang
    #./scripts/demo.sh
    input=$tmp_dir/input/$id
    output=$tmp_dir/output/$id
    config=./config/ner.properties
    format="-c"
    ./scripts/annotate.sh $input $output $format $config
    #echo "................"
    #echo $input
    #echo $output
    
fi

popd
