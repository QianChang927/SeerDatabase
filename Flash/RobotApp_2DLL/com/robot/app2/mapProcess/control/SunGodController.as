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
   import com.robot.core.manager.map.config.BaseMapProcess;
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
   
   public class SunGodController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var timer:Timer;
      
      private static var ui:MovieClip;
       
      
      public function SunGodController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:Date = new Date(2015,3,24);
         var _loc3_:Date = new Date(2015,3,26,14);
         var _loc4_:Date;
         if((_loc4_ = SystemTimerManager.sysBJDate).time >= _loc2_.time && _loc4_.time <= _loc3_.time)
         {
            if(BitBuffSetClass.getState(22718) == 0)
            {
               playAnimation();
            }
         }
         else
         {
            MapObjectControl.addIgnore("sunGodIcon");
         }
      }
      
      private static function playAnimation() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("SunGodAnimation"),function(param1:MovieClip):void
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
                        BitBuffSetClass.setState(22718,1);
                        ModuleManager.showAppModule("SunGodMainPanel");
                     });
                  });
               });
            });
         });
      }
      
      private static function showNpcDialog2(param1:Function) : void
      {
         var func:Function = param1;
         NpcDialog.show(NPC.SAIXIAOXI,["就是你向赛尔号发讯号让我们过来的吗？"],[""],[function():void
         {
            NpcDialog.show(NPC.KAERNA,["没错，我想问一下，你们是否碰到过一只叫伽美什的精灵？"],[""],[function():void
            {
               NpcDialog.show(NPC.ATIEDA,["我们确实见过他，不过他已经走了。"],[""],[function():void
               {
                  NpcDialog.show(NPC.KAERNA,["他是我一个老相识，和我详细说一下他的行踪吧。"],[""],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["是这样的……"],[""],[function():void
                     {
                        NpcDialog.show(NPC.KAERNA,["这么说，他会在5月1日时再来，而且他给你们所有人赠礼？"],[""],[function():void
                        {
                           NpcDialog.show(NPC.KALULU,["嗯，就是这样。"],[""],[function():void
                           {
                              NpcDialog.show(NPC.KAERNA,["我不会在任何地方输给他，通知你们所有的伙伴吧，我也会发放3天的赠礼。之后，我就会启程寻找伽美什。"],[""],[function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI_KALULU_ATIEDA,["好的，我们代表所有小赛尔感谢你的慷慨。"],[""],[function():void
                                 {
                                    func();
                                 }]);
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function showNpcDialog1(param1:Function) : void
      {
         var func:Function = param1;
         NpcDialog.show(NPC.ABOLUO,["卡尔纳，为何事召唤我过来？"],[""],[function():void
         {
            NpcDialog.show(NPC.KAERNA,["太阳神大人，前不久我感应到一个老朋友降临到了这个世界。"],[""],[function():void
            {
               NpcDialog.show(NPC.ABOLUO,["老朋友？如果只是这样的话你也不会召唤我吧。"],[""],[function():void
               {
                  NpcDialog.show(NPC.KAERNA,["准确来说，他是我的宿敌，我们没有仇怨，只是为了力量和胜利而互相战斗。"],[""],[function():void
                  {
                     NpcDialog.show(NPC.ABOLUO,["你是让我批准你去他决一胜负？"],[""],[function():void
                     {
                        NpcDialog.show(NPC.KAERNA,["正是如此。"],[""],[function():void
                        {
                           NpcDialog.show(NPC.ABOLUO,["我没有理由拒绝，去展示我太阳神麾下神使的力量吧！"],[""],[function():void
                           {
                              func();
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      public static function showBroadCast() : void
      {
         var _loc1_:Date = new Date(2015,3,24);
         var _loc2_:Date = new Date(2015,3,26,14);
         var _loc3_:Date = SystemTimerManager.sysBJDate;
         if(_loc3_.time >= _loc1_.time && _loc3_.time <= _loc2_.time)
         {
            setTimer();
         }
      }
      
      private static function setTimer() : void
      {
         ui = UIManager.getMovieClip("ui_Broadcast_mc");
         (ui["txt"] as TextField).htmlText = "<b>" + "送大礼活动第二弹来临——太阳神使送大礼, 就在今天<font color=\'#ff0000\'> 13:00-14:00 </font> ." + "</b>";
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
      
      public static function destroy() : void
      {
         if(_map != null)
         {
            _map = null;
         }
      }
   }
}
