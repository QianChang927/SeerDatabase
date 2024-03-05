package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import org.taomee.events.SocketEvent;
   
   public class BossReductionController
   {
      
      private static const MapIDList:Array = [32,419,484,507,82];
      
      private static const RegionIDList:Array = [[6],[0],[1],[0],[0,1,2,3]];
      
      private static const ItemIDList:Array = [1200677,1200678,1200680,1200679,1200691];
       
      
      public function BossReductionController()
      {
         super();
      }
      
      public static function setup() : void
      {
      }
      
      public static function fightBoss(param1:String, param2:int, param3:Boolean = false, param4:Boolean = true) : Boolean
      {
         var startFight:Function;
         var mapIDIndex:int = 0;
         var name:String = param1;
         var index:int = param2;
         var skipKillPlugin:Boolean = param3;
         var type:Boolean = param4;
         mapIDIndex = MapIDList.indexOf(MapManager.currentMap.id);
         if(mapIDIndex >= 0)
         {
            if(RegionIDList[mapIDIndex] != null && RegionIDList[mapIDIndex].indexOf(index) >= 0)
            {
               startFight = function():void
               {
                  if(mapIDIndex == 1)
                  {
                     PetFightModel.mode = PetFightModel.SINGLE_MODE;
                     PetFightModel.status = PetFightModel.FIGHT_WITH_NPC;
                     PetFightModel.enemyName = name;
                     SocketConnection.send(CommandID.FIGHT_SPECIAL_PET);
                  }
                  else
                  {
                     FightManager.confirmFightWithBoss(name,index,skipKillPlugin,type);
                  }
               };
               ItemManager.upDateCollection(ItemIDList[mapIDIndex],function():void
               {
                  var itemInfo:SingleItemInfo = ItemManager.getCollectionInfo(ItemIDList[mapIDIndex]);
                  if(itemInfo)
                  {
                     Alert.show("是否使用" + ItemXMLInfo.getName(itemInfo.itemID) + "来弱化BOSS？",function():void
                     {
                        SocketConnection.addCmdListener(CommandID.USE_WEAK_ITEM,function(param1:SocketEvent):void
                        {
                           SocketConnection.removeCmdListener(CommandID.USE_WEAK_ITEM,arguments.callee);
                           startFight();
                        });
                        SocketConnection.send(CommandID.USE_WEAK_ITEM,mapIDIndex + 1);
                     },function():void
                     {
                        startFight();
                     });
                  }
                  else
                  {
                     startFight();
                  }
               });
               return true;
            }
         }
         return false;
      }
      
      public static function destroy() : void
      {
      }
   }
}
