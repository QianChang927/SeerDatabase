package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   
   public class MolingwangController
   {
      
      private static var _instance:com.robot.app.control.MolingwangController;
       
      
      public var dialogarr:Array;
      
      private var mapmovie:MovieClip;
      
      public function MolingwangController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app.control.MolingwangController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.MolingwangController();
         }
         return _instance;
      }
      
      public function showmapmv(param1:int) : void
      {
         var idx:int = param1;
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("molingwangMv"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            KTool.hideMapAllPlayerAndMonster();
            getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
            mapmovie = mc;
            LevelManager.mapLevel.addChild(mapmovie);
            AnimateManager.playMcAnimate(mapmovie,idx + 1,"mc",function():void
            {
               if(idx < 2)
               {
                  end();
               }
               else
               {
                  NpcDialog.show(NPC.LIEHUANG,[dialogarr[0]],[dialogarr[1]],[function():void
                  {
                     NpcDialog.show(NPC.LIEHUANG,[dialogarr[2]],[dialogarr[3]],[function():void
                     {
                        NpcDialog.show(NPC.LIEHUANG,[dialogarr[4]],[dialogarr[5]],[function():void
                        {
                           NpcDialog.show(NPC.LIEHUANG,[dialogarr[6]],[dialogarr[7]],[function():void
                           {
                              end();
                           }]);
                        }]);
                     }]);
                  }]);
               }
            });
         });
      }
      
      private function end() : void
      {
         if(Boolean(this.mapmovie) && Boolean(this.mapmovie.parent))
         {
            this.mapmovie.parent.removeChild(this.mapmovie);
         }
         this.mapmovie = null;
         KTool.showMapAllPlayerAndMonster(true);
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
         MapManager.changeMapWithCallback(1,function():void
         {
            ModuleManager.showAppModule("MolingwangMainPanel");
         });
      }
   }
}
