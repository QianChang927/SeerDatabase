package com.robot.app2.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.xml.DiamondFreeXMLInfo;
   import org.taomee.ds.HashMap;
   
   public class JoannaController
   {
      
      private static var bitsetGroup:Array = [{
         "groupBit":8087,
         "freeKey":[96]
      },{
         "groupBit":8087,
         "freeKey":[97]
      },{
         "groupBit":8087,
         "freeKey":[98]
      },{
         "groupBit":8087,
         "freeKey":[99]
      },{
         "groupBit":8087,
         "freeKey":[100]
      },{
         "groupBit":8087,
         "freeKey":[101]
      },{
         "groupBit":8087,
         "freeKey":[102]
      },{
         "groupBit":8087,
         "freeKey":[103]
      },{
         "groupBit":8087,
         "freeKey":[104]
      }];
      
      private static var bitsetHashMap:HashMap = new HashMap();
       
      
      public function JoannaController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var bitsets:Array = null;
         var obj:Object = null;
         var key:int = 0;
         bitsets = [];
         for each(obj in bitsetGroup)
         {
            bitsets.push(obj.groupBit);
            for each(key in obj.freeKey)
            {
               bitsets.push(int(DiamondFreeXMLInfo.getItemXML(key).@CheckBitSetId));
            }
         }
         KTool.getBitSet(bitsets,function(param1:Array):void
         {
            var _loc3_:int = 0;
            var _loc2_:int = 0;
            while(_loc2_ < bitsets.length)
            {
               bitsetHashMap.add(bitsets[_loc2_],param1[_loc2_]);
               _loc2_++;
            }
            for each(obj in bitsetGroup)
            {
               if(bitsetHashMap.getValue(obj.groupBit) == 0)
               {
                  for each(key in obj.freeKey)
                  {
                     _loc3_ = int(DiamondFreeXMLInfo.getItemXML(key).@CheckBitSetId);
                     if(bitsetHashMap.getValue(_loc3_) == 1)
                     {
                        LocalMsgController.addLocalMsg("JoannaPanel1",0,false,key);
                        break;
                     }
                  }
               }
            }
         });
      }
   }
}
