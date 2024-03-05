package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class KaixueSongZuanController
   {
      
      public static var isShow:Boolean = false;
      
      private static var _icon:MovieClip;
      
      private static var _maps:Array = [1096,1110,1003,1109,1111];
      
      private static var _task:int;
       
      
      public function KaixueSongZuanController()
      {
         super();
      }
      
      public static function InOnline() : void
      {
         var k:int = 0;
         k = int(MapManager.currentMap.id);
         if(k == 65 || k == 1096 || k == 1110 || k == 1003 || k == 1109 || k == 1111)
         {
            KTool.getMultiValue([12313],function(param1:Array):void
            {
               var m:int = 0;
               var s:int = 0;
               var i:int = 0;
               var a:Array = param1;
               if(isShow)
               {
                  m = 0;
                  s = 0;
                  i = 4;
                  while(i >= 0)
                  {
                     if(KTool.getBit(a[0],i + 1) == 0)
                     {
                        m = i;
                        _task = i;
                     }
                     else if(KTool.getBit(a[0],i + 1) == 1)
                     {
                        s++;
                     }
                     i--;
                  }
                  if(_icon)
                  {
                     _icon.numTxt.text = s;
                     _icon.mapMc.gotoAndStop(_task + 1);
                     if(s < 5)
                     {
                        _icon.gotoBtn.gotoAndStop(1);
                     }
                     else
                     {
                        _icon.gotoBtn.gotoAndStop(2);
                     }
                  }
                  else
                  {
                     ResourceManager.getResource(ClientConfig.getUiIcon("KaixueSongZuanIcon"),function(param1:MovieClip):void
                     {
                        _icon = param1;
                        _icon.x = 603;
                        _icon.y = 124;
                        _icon.numTxt.text = s;
                        _icon.mapMc.gotoAndStop(_task + 1);
                        if(s < 5)
                        {
                           _icon.gotoBtn.gotoAndStop(1);
                        }
                        else
                        {
                           _icon.gotoBtn.gotoAndStop(2);
                        }
                        _icon.addEventListener(MouseEvent.CLICK,goto);
                        LevelManager.iconLevel.addChild(_icon);
                        MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,mapHandle);
                     });
                  }
                  npcDialog(k);
               }
            });
         }
      }
      
      private static function showDialog(param1:int, param2:Array, param3:Array) : void
      {
         NpcDialog.show(param1,param2,param3);
      }
      
      private static function npcDialog(param1:int) : void
      {
         switch(param1)
         {
            case 1096:
               showDialog(NPC.ZHAN_SHEN_GAI_YA,["等了好久，雷伊完全体终于要在9月11日降临了，一起来见证这伟大的时刻吧！勇敢的赛尔！"],["好！我们一起见证！"]);
               break;
            case 1110:
               showDialog(NPC.KAXIUSI_SUPER,["力量，代表责任；力量，代表勇气！拥有更加强大力量的雷伊一定会更加勇敢守护赛尔号的！"],["恩，9月11日我们一起来加油！"]);
               break;
            case 1003:
               showDialog(NPC.BULAIKE_EVO,["雷霆再现，天地色变！雷伊完全体究竟会强大到什么程度呢？"],["9月11日，我们一起见证！"]);
               break;
            case 1109:
               showDialog(NPC.CHITONGMIUSI,["9月11日，雷伊完全体降临啦！大家终于都突破了，小赛尔，你准备好和战神联盟并肩战斗了吗？"],["准备好了！我会准时来见证雷伊完全体降临的！"]);
               break;
            case 1111:
               showDialog(NPC.LEINUO_YI,["亲爱的弟弟，我终于等到这一天了。相信你的完全体一定超乎想象的强大，就让我们兄弟一起并肩前进吧！"],["好感动！5555~我会来为你们加油的！"]);
         }
      }
      
      private static function goto(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(e.target.name == "goMapBtn")
         {
            MapManager.changeMap(_maps[_task]);
         }
         else if(e.target.name == "getBtn")
         {
            StatManager.sendStat2014("0902开学登录送钻石","点击小面板领取钻石",StatManager.RUN_ACT_2015);
            MapManager.changeMapWithCallback(65,function():void
            {
               ModuleManager.showAppModule("KaixueSongZuanPanel");
            });
         }
         else if(e.target.name == "close")
         {
            destroy();
         }
      }
      
      private static function mapHandle(param1:MapEvent) : void
      {
         InOnline();
      }
      
      public static function destroy() : void
      {
         if(_icon)
         {
            DisplayUtil.removeForParent(_icon);
            _icon.removeEventListener(MouseEvent.CLICK,goto);
            _icon = null;
         }
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,mapHandle);
      }
   }
}
