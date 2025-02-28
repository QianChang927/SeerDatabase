package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class KingHallController
   {
      
      private static var bossObj:Object = {
         "aliya":{
            "panel":"KingHallAliyaMainPanel",
            "mapAnimate":"map_1024_kingHall_aliya",
            "fullAnimate":"kingHall_aliya_full",
            "bitbuff":22517
         },
         "meidiya":{
            "panel":"KingHallMeidiyaMainPanel",
            "mapAnimate":"map_1024_kingHall_meidiya",
            "fullAnimate":"",
            "bitbuff":22522
         },
         "kandar":{
            "panel":"KingHallKandarMainPanel",
            "mapAnimate":"map_1024_kingHall_kandar",
            "fullAnimate":"",
            "bitbuff":22539
         },
         "assassin":{
            "panel":"KingHallAssassinPanel",
            "mapAnimate":"map_1024_kingHall_assassin",
            "fullAnimate":"",
            "bitbuff":22545
         }
      };
       
      
      public function KingHallController()
      {
         super();
      }
      
      public static function clickAliya() : void
      {
         clickEquip("aliya");
      }
      
      public static function clickMeidiya() : void
      {
         clickEquip("meidiya");
      }
      
      public static function clickKandar() : void
      {
         clickEquip("kandar");
      }
      
      public static function clickAssassin() : void
      {
         clickEquip("assassin");
      }
      
      public static function clickEquip(param1:String) : void
      {
         var type:String = param1;
         if(MapManager.currentMap.id != 1024)
         {
            MapManager.changeMap(1024);
            return;
         }
         if(BitBuffSetClass.getState(bossObj[type].bitbuff))
         {
            ModuleManager.showModule(ClientConfig.getAppModule(bossObj[type].panel));
         }
         else
         {
            MapObjectControl.hideOrShowAllObjects(false);
            KTool.hideMapAllPlayerAndMonster();
            ResourceManager.getResource(ClientConfig.getMapAnimate(bossObj[type].mapAnimate),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               MapManager.currentMap.controlLevel.addChild(mc);
               AnimateManager.playMcAnimate(mc,1,"mc1",function():void
               {
                  if(bossObj[type].fullAnimate != "")
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(bossObj[type].fullAnimate),function():void
                     {
                        DisplayUtil.removeForParent(mc);
                        MapObjectControl.hideOrShowAllObjects(true);
                        KTool.showMapAllPlayerAndMonster();
                        BitBuffSetClass.setState(bossObj[type].bitbuff,1);
                        ModuleManager.showModule(ClientConfig.getAppModule(bossObj[type].panel));
                     });
                  }
                  else
                  {
                     DisplayUtil.removeForParent(mc);
                     MapObjectControl.hideOrShowAllObjects(true);
                     KTool.showMapAllPlayerAndMonster();
                     BitBuffSetClass.setState(bossObj[type].bitbuff,1);
                     ModuleManager.showModule(ClientConfig.getAppModule(bossObj[type].panel));
                  }
               });
            });
         }
      }
   }
}
