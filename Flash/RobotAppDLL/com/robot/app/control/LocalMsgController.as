package com.robot.app.control
{
   import com.robot.app.cmd.SysMsgCmdListener;
   import com.robot.core.info.SystemMsgInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CronTimeVo;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.events.Event;
   import flash.net.URLLoader;
   
   public class LocalMsgController
   {
      
      private static var _urlloader:URLLoader;
       
      
      public function LocalMsgController()
      {
         super();
      }
      
      public static function setup() : void
      {
         PreloadZipXMLController.getXML("localMsg.xml",parse);
      }
      
      private static function onLoadXML(param1:Event) : void
      {
         var _loc2_:XML = XML(param1.target.data);
         parse(_loc2_);
      }
      
      private static function parse(param1:XML) : void
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:String = null;
         var _loc5_:XML = null;
         for each(_loc3_ in param1.children())
         {
            _loc4_ = _loc3_.@time;
            if(getIsInActivityTime(_loc4_))
            {
               _loc2_ = _loc3_;
               break;
            }
         }
         if(_loc2_ != null)
         {
            for each(_loc5_ in _loc2_.children())
            {
               addLocalMsg(_loc5_.@moduleName,uint(_loc5_.@buffer),Boolean(int(_loc5_.@isUseSO)),Object(_loc5_.@moduleParam),_loc5_.@moduleType,int(_loc5_.@msgPriority),Boolean(int(_loc5_.@isSimple)),_loc5_.@des);
            }
         }
         if(_urlloader)
         {
            _urlloader.removeEventListener(Event.COMPLETE,onLoadXML);
            _urlloader = null;
         }
      }
      
      private static function getIsInActivityTime(param1:String) : Boolean
      {
         var _loc4_:CronTimeVo = null;
         var _loc5_:Array = null;
         var _loc6_:CronTimeVo = null;
         if(param1 == "")
         {
            return true;
         }
         var _loc2_:Array = param1.split(",");
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            _loc5_ = (_loc2_[_loc3_] as String).split(" ");
            _loc6_ = new CronTimeVo(_loc5_[0],_loc5_[1],_loc5_[2],_loc5_[3],_loc5_[4],_loc5_[5]);
            _loc2_[_loc3_] = _loc6_;
            _loc3_++;
         }
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function addLocalMsg(param1:String, param2:uint = 0, param3:Boolean = false, param4:Object = null, param5:String = null, param6:int = 0, param7:Boolean = false, param8:String = "") : void
      {
         if(param2 != 0)
         {
            if(BufferRecordManager.getState(MainManager.actorInfo,param2))
            {
               return;
            }
         }
         if(param3)
         {
            if(SOManager.getUserSO(SOManager.LOCALMSG).data[param1])
            {
               return;
            }
         }
         var _loc9_:SystemMsgInfo;
         (_loc9_ = new SystemMsgInfo()).moduleName = param1;
         _loc9_.buffer = param2;
         _loc9_.isUseSO = param3;
         _loc9_.moduleType = param5;
         _loc9_.msgPriority = param6;
         _loc9_.isSimple = param7;
         _loc9_.des = param8;
         if(param4 != null)
         {
            _loc9_.moduleParam = param4;
         }
         SysMsgCmdListener.getInstance().addInfo(_loc9_);
      }
   }
}
