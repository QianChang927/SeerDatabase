package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.utils.Timer;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class KingTreasuryController
   {
      
      private static var timer:Timer;
      
      private static var ui:MovieClip;
       
      
      public function KingTreasuryController()
      {
         super();
      }
      
      public static function init() : void
      {
         if(BitBuffSetClass.getState(22712) == 0)
         {
            playAnimation();
         }
      }
      
      private static function playAnimation() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("KingTreasuryAnimation"),function(param1:MovieClip):void
         {
            var taskMc:MovieClip = param1;
            LevelManager.topLevel.addChild(taskMc);
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            NpcController.npcVisible = false;
            LevelManager.iconLevel.visible = false;
            ToolBarController.panel.hide();
            ModuleManager.hideAllModule();
            AnimateManager.playMcAnimate(taskMc,1,"mc0",function():void
            {
               showNpcDialog1(function():void
               {
                  AnimateManager.playMcAnimate(taskMc,2,"mc1",function():void
                  {
                     showNpcDialog2(function():void
                     {
                        DisplayUtil.removeForParent(taskMc);
                        KTool.showMapAllPlayerAndMonster();
                        MapObjectControl.hideOrShowAllObjects(true);
                        NpcController.npcVisible = true;
                        LevelManager.iconLevel.visible = true;
                        ToolBarController.panel.show();
                        BitBuffSetClass.setState(22712,1);
                        ModuleManager.showAppModule("KingTreasuryMainPanel");
                     });
                  });
               });
            });
         });
      }
      
      private static function showNpcDialog2(param1:Function) : void
      {
         var func:Function = param1;
         NpcDialog.show(NPC.JIA_MEI_SHI,["召唤本王的，是你们吗？"],[""],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["不是，我们只是帮你启动了能量法阵。"],[""],[function():void
            {
               NpcDialog.show(NPC.JIA_MEI_SHI,["本王从不欠别人人情，你们有幸可以得到本王的赏赐。"],[""],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI_KALULU_ATIEDA,["不用了，我们只是举手之劳而已。"],[""],[function():void
                  {
                     NpcDialog.show(NPC.JIA_MEI_SHI,["本王的王之宝库取之不尽，你们不必客气，你们还可以让其他同伴也过来领赏，算是本王降临这个世界的赠礼。不过记住，本王只在这里停留3天。"],[""],[function():void
                     {
                        func();
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function showNpcDialog1(param1:Function) : void
      {
         var func:Function = param1;
         NpcDialog.show(NPC.SAIXIAOXI,["派特博士说精灵圣殿里出现了异常的能量波动，让我们过来侦查一下，果然有情况！"],[""],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["那些金光是怎么回事？"],[""],[function():void
            {
               NpcDialog.show(NPC.KALULU,["应该是某种召唤仪式，某个强大的精灵即将降临，不过好像缺少能量供应的样子。"],[""],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["没错，我记得精灵圣殿里有提供能量的法阵，用电能激发那边的柱子就可以了。"],[""],[function():void
                  {
                     NpcDialog.show(NPC.KALULU,["雷伊，你说要不要去帮帮这只精灵？"],[""],[function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["看能量波动应该不是什么邪恶的精灵，我去试试！"],[""],[function():void
                        {
                           func();
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      public static function showBroadCast() : void
      {
         var _loc1_:Date = new Date(2015,3,17);
         var _loc2_:Date = new Date(2015,3,19,15);
         var _loc3_:Date = SystemTimerManager.sysBJDate;
         if(_loc3_.time >= _loc1_.time && _loc3_.time <= _loc2_.time)
         {
            setTimer();
         }
      }
      
      private static function setTimer() : void
      {
         ui = UIManager.getMovieClip("ui_Broadcast_mc");
         (ui["txt"] as TextField).htmlText = "<b>" + "王之宝库送大礼活动开启，精彩好礼来就送！就在今晚<font color=\'#ff0000\'> 14:00-15:00 </font> ." + "</b>";
         LevelManager.toolsLevel.addChild(resizeMc(ui));
         timer = new Timer(8000);
         timer.addEventListener(TimerEvent.TIMER,onTimer);
         timer.start();
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         timer.removeEventListener(TimerEvent.TIMER,onTimer);
         DisplayUtil.removeForParent(ui);
      }
      
      private static function resizeMc(param1:MovieClip) : MovieClip
      {
         param1["txt"].width = param1["txt"].textWidth;
         param1["bar"].width = param1["txt"].width + 54;
         DisplayUtil.align(param1,null,AlignType.TOP_CENTER,new Point(0,100));
         return param1;
      }
   }
}
