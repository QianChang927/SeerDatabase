package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   
   public class SpaceshipSystemMaintenanceMainPanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNum:int;
      
      private var _chooseTeam:Boolean = false;
      
      private var _unlockIndexArr:Array;
      
      private var _bitArr_0:Array;
      
      public function SpaceshipSystemMaintenanceMainPanel()
      {
         this._bitArr_0 = [1,3,4,5];
         super();
         resUrl = "2024/1122/SpaceshipSystemMaintenanceMainPanel";
         configUrl = "2024/1122/spaceshipSystemMaintenanceConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("MapStorySeriesGuide");
               break;
            case "chouquBtn":
               AnimateManager.playMcAnimate(_mainUI.playMc,1,"mc" + 1,function():void
               {
                  _mainUI.playMc.visible = false;
                  refresh();
                  openEvent();
               });
               break;
            case "gotoBtn_" + index:
               this.hide();
               ModuleManager.showAppModule("SpaceshipSystemMaintenanceGame" + index + "Panel");
               break;
            case "getBtn":
               sendCmd(this._commdId,[27,index1 + 4],function():void
               {
                  refresh();
               });
         }
      }
      
      override protected function updatePanel() : void
      {
         var forever_105808:int;
         var forever_105807:int;
         var requireNumArr:Array;
         var frame:int;
         var i:int;
         var num:int = 0;
         this._commdId = getValue("comId")[0];
         forever_105808 = int(getValue("forever_105808"));
         forever_105807 = int(getValue("forever_105807"));
         requireNumArr = getValue("requireNumArr");
         num = int(KTool.subByte(forever_105808,0,8));
         frame = int(num / 15 * 100) > 0 ? int(num / 15 * 100) : 1;
         _mainUI.progressBarMc.gotoAndStop(frame);
         for(i = 0; i < 5; i++)
         {
            if(BitUtils.getBit(forever_105808,i + 8) > 0)
            {
               _mainUI["btnMc_" + i].gotoAndStop(2);
               CommonUI.setEnabled(_mainUI["btnMc_" + i],true,false);
            }
            else
            {
               _mainUI["btnMc_" + i].gotoAndStop(1);
               if(num >= requireNumArr[i])
               {
                  CommonUI.setEnabled(_mainUI["btnMc_" + i],true,false);
               }
               else
               {
                  CommonUI.setEnabled(_mainUI["btnMc_" + i],false,true);
               }
            }
         }
         if(BitUtils.getBit(forever_105807,19) == 0 && BitUtils.getBit(forever_105808,13) == 0)
         {
            sendCmd(this._commdId,[27,9],function():void
            {
            });
            Alert.show("完成剧情《云霄星异动》后参与活动体验更佳，是否前往完成主线任务？  ",function():void
            {
               hide();
               ModuleManager.showAppModule("MapStorySeriesGuide");
            });
         }
      }
      
      override public function hide() : void
      {
         this._unlockIndexArr = null;
         super.hide();
      }
   }
}

