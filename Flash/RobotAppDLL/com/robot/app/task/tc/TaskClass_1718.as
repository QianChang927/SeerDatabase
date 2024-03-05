package com.robot.app.task.tc
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.task.novice.NoviceFinishInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   
   public class TaskClass_1718
   {
       
      
      private var _arrayItem:Array;
      
      public function TaskClass_1718(param1:NoviceFinishInfo)
      {
         var _loc2_:Object = null;
         this._arrayItem = [];
         super();
         for each(_loc2_ in param1.monBallList)
         {
            if(_loc2_)
            {
               this._arrayItem.push([_loc2_["itemID"],_loc2_["itemCnt"]]);
            }
         }
         this.loop();
      }
      
      private function loop() : void
      {
         this.getItem(this._arrayItem);
      }
      
      private function getItem(param1:Array) : void
      {
         var _loc2_:Array = null;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:* = null;
         if(param1.length == 0)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("OutPrintFanciersPanel"));
         }
         else
         {
            _loc2_ = param1.shift();
            _loc3_ = uint(_loc2_[0]);
            _loc4_ = uint(_loc2_[1]);
            if(_loc3_ == 1)
            {
               MainManager.actorInfo.coins += _loc4_;
               Alarm.show("你获得了" + TextFormatUtil.getRedTxt(_loc4_.toString()) + "赛尔豆！",this.loop);
            }
            else if(_loc3_ == 3)
            {
               Alarm.show("你获得了" + TextFormatUtil.getRedTxt(_loc4_.toString()) + "点积累经验！",this.loop);
            }
            else if(!CountermarkXMLInfo.isminMark(_loc3_) && ItemXMLInfo.getCatID(_loc3_) == 14)
            {
               Alarm.show("你获得了" + TextFormatUtil.getRedTxt(_loc4_.toString()) + "个" + ItemXMLInfo.getName(_loc3_),this.loop);
            }
            else if(CountermarkXMLInfo.isminMark(_loc3_))
            {
               ItemInBagAlert.show(_loc3_,"你获得了" + _loc4_ + "个<font color=\'#FF0000\'>" + CountermarkXMLInfo.getDes(_loc3_) + "</font>！",this.loop);
            }
            else
            {
               _loc5_ = "";
               if(_loc3_ >= 500001 && _loc3_ <= 600000)
               {
                  _loc5_ = _loc4_ + "个<font color=\'#FF0000\'>" + ItemXMLInfo.getName(_loc3_) + "</font>已经放入了你的基地仓库！";
               }
               else if(_loc3_ >= 600001 && _loc3_ <= 700000)
               {
                  _loc5_ = _loc4_ + "个<font color=\'#FF0000\'>" + ItemXMLInfo.getName(_loc3_) + "</font>已经放入了你的投掷道具栏！";
               }
               else
               {
                  _loc5_ = _loc4_ + "个<font color=\'#FF0000\'>" + ItemXMLInfo.getName(_loc3_) + "</font>已经放入了你的储存箱！";
               }
               ItemInBagAlert.show(_loc3_,_loc5_,this.loop);
            }
         }
      }
   }
}
