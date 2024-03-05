package com.robot.app.control
{
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.utils.getDefinitionByName;
   import org.taomee.bean.BaseBean;
   
   public class SetupsController extends BaseBean
   {
      
      private static var funs:Array;
       
      
      public function SetupsController()
      {
         super();
      }
      
      public static function newseerover() : void
      {
         var _loc1_:Function = null;
         if(Boolean(funs) && Boolean(funs.length))
         {
            for each(_loc1_ in funs)
            {
               if(_loc1_ != null)
               {
                  _loc1_();
               }
            }
            funs = [];
         }
      }
      
      override public function start() : void
      {
         PreloadZipXMLController.getXML("setupCollection.xml",this.config);
      }
      
      private function config(param1:*) : void
      {
         var _loc4_:XML = null;
         var _loc5_:String = null;
         var _loc6_:Array = null;
         var _loc7_:int = 0;
         var _loc8_:Class = null;
         var _loc9_:Function = null;
         var _loc2_:XML = param1;
         var _loc3_:XMLList = _loc2_.elements("item");
         funs = [];
         for each(_loc4_ in _loc3_)
         {
            _loc6_ = (_loc5_ = String(_loc4_.@fun)).split(":");
            _loc7_ = int(_loc4_.@newseershow);
            if((_loc8_ = getDefinitionByName(String(_loc6_[0])) as Class) == null)
            {
               Alarm2.show("setupCollection.xml 出错！没有:" + String(_loc6_[0]));
            }
            else
            {
               _loc9_ = _loc8_[String(_loc6_[1])];
               if(_loc7_ == 0 && Boolean(NewSeerTaskController.isNewSeer))
               {
                  funs.push(_loc9_);
               }
               else
               {
                  _loc9_();
               }
            }
         }
         finish();
      }
   }
}
