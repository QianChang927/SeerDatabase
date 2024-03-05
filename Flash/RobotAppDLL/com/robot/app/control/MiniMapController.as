package com.robot.app.control
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.panel.PartyMapNamePanel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.userHoldParty.PartyMapManager;
   import org.taomee.bean.BaseBean;
   
   public class MiniMapController extends BaseBean
   {
      
      private static const noShow:Array = [703];
      
      private static const module:Array = ["MiniMap_484","MiniMap_451"];
      
      public static const mapList:Array = [[484,478,479,445,486,487],[507,506,455,452,451,453,454,434]];
       
      
      public function MiniMapController()
      {
         super();
      }
      
      override public function start() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_OPEN,this.onMapOpen);
         finish();
      }
      
      private function onMapOpen(param1:MapEvent) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:Array = null;
         var _loc2_:String = "";
         var _loc3_:uint = uint(MapManager.getMapController().newMapID);
         if(_loc3_ >= 10001 && _loc3_ <= 10010)
         {
            _loc2_ = "MiniMap_484";
            this.exec(_loc3_,"MiniMap_484");
         }
         else
         {
            _loc5_ = 0;
            while(_loc5_ < mapList.length)
            {
               if((_loc6_ = mapList[_loc5_]).indexOf(_loc3_) != -1)
               {
                  _loc2_ = String(module[_loc5_]);
                  this.exec(_loc3_,module[_loc5_]);
                  break;
               }
               _loc5_++;
            }
         }
         if(_loc2_ == "" && noShow.indexOf(_loc3_) == -1)
         {
            if(_loc3_ == 28 && PartyMapManager.partyType != 0)
            {
               MapNamePanel.hide();
               PartyMapNamePanel.show();
            }
            else
            {
               MapNamePanel.init(_loc3_);
               MapNamePanel.show();
               PartyMapNamePanel.hide();
            }
         }
         else
         {
            MapNamePanel.hide();
            PartyMapNamePanel.hide();
         }
         var _loc4_:uint = 0;
         while(_loc4_ < module.length)
         {
            if(module[_loc4_] != _loc2_)
            {
               ModuleManager.destroy(ClientConfig.getMapModule(module[_loc4_]));
            }
            _loc4_++;
         }
      }
      
      private function exec(param1:uint, param2:String) : void
      {
         var mapID:uint = param1;
         var mName:String = param2;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            ModuleManager.showModule(ClientConfig.getMapModule(mName),"加载小地图....",mapID);
         });
      }
   }
}
