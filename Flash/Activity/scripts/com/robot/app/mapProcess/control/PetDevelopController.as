package com.robot.app.mapProcess.control
{
   import com.robot.app.task.petstory.app.PetBagPanel;
   import com.robot.app.task.petstory.evt.PetBagEvent;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class PetDevelopController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function PetDevelopController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         EventManager.addEventListener("showPet",onShowPetBag);
         SocketConnection.addCmdListener(CommandID.PET_DEV_GET_REWARD,onGetRewardsComplete);
         MapListenerManager.add(_map.conLevel["fixture"],onFixtureClick,"精灵养成装置");
      }
      
      private static function onGetRewardsComplete(param1:SocketEvent) : void
      {
         var _loc2_:uint = uint(MainManager.actorInfo.monthLoginDay);
         if(_loc2_ > 0 && _loc2_ < 3)
         {
            Alarm.show("你的精灵等级已经成功提升啦！");
         }
         else if(_loc2_ < 5)
         {
            Alarm.show("你的精灵的学习力成功增加了！");
         }
         else if(_loc2_ < 7)
         {
            Alarm.show("你的精灵等级已经成功提升啦！");
         }
         else if(_loc2_ < 9)
         {
            Alarm.show("你的精灵的学习力成功增加了！");
         }
         else if(_loc2_ < 12)
         {
            Alarm.show("你的精灵等级已经成功提升啦！");
         }
         else if(_loc2_ < 15)
         {
            Alarm.show("你的精灵性格已经成功改变了！");
         }
         else
         {
            Alarm.show("你的精灵个体值成功提升啦！");
         }
      }
      
      private static function onShowPetBag(param1:Event) : void
      {
         EventManager.addEventListener(PetBagPanel.PET_CHOOSE,getPetData);
         var _loc2_:PetBagPanel = new PetBagPanel(5);
         _loc2_.addEventListener(PetBagEvent.CLOSE_PET_BAG,onMosueDestory);
      }
      
      private static function onMosueDestory(param1:PetBagEvent) : void
      {
         param1.currentTarget.removeEventListener(PetBagEvent.CLOSE_PET_BAG,onMosueDestory);
         EventManager.removeEventListener(PetBagPanel.PET_CHOOSE,getPetData);
      }
      
      private static function getPetData(param1:DynamicEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:Object = null;
         EventManager.removeEventListener(PetBagPanel.PET_CHOOSE,getPetData);
         var _loc2_:PetInfo = param1.paramObject as PetInfo;
         if(_loc2_)
         {
            _loc3_ = uint(MainManager.actorInfo.monthLoginDay);
            if(_loc3_ >= 3 && _loc3_ < 5 || _loc3_ >= 7 && _loc3_ < 9)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("petDevelop/PetTrainPanel"),"正在加载...",_loc2_);
            }
            else if(_loc3_ >= 12)
            {
               (_loc4_ = new Object()).info = _loc2_;
               if(_loc3_ >= 15)
               {
                  _loc4_.type = 1;
               }
               else
               {
                  _loc4_.type = 2;
               }
               ModuleManager.showModule(ClientConfig.getAppModule("petDevelop/PetDetailPanel"),"正在加载...",_loc4_);
            }
         }
      }
      
      private static function onFixtureClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86049808);
         ModuleManager.showModule(ClientConfig.getAppModule("petDevelop/PetDevelopPanel"),"正在加载...");
      }
      
      public static function destroy() : void
      {
         EventManager.removeEventListener("showpet",onShowPetBag);
         SocketConnection.removeCmdListener(CommandID.PET_DEV_GET_REWARD,onGetRewardsComplete);
         _map = null;
      }
   }
}
