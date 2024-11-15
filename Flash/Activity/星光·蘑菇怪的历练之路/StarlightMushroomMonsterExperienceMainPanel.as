package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.utils.BitUtils;
   
   public class StarlightMushroomMonsterExperienceMainPanel extends ActivityModel
   {
      private var _commdId:int;
      
      public function StarlightMushroomMonsterExperienceMainPanel()
      {
         super();
         resUrl = "2024/1115/StarlightMushroomMonsterExperienceMainPanel";
         configUrl = "2024/1115/starlightMushroomMonsterExperienceConfig";
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
               ModuleManager.showAppModule("Vip15thCollectionPanel");
               break;
            case "gotoBtn":
               this.hide();
               ModuleManager.showAppModule("StarlightMushroomMonsterExperienceGamePanel");
               break;
            case "getRewardBtn":
               _mainUI.currentFrame;
               if(_mainUI["rewardMc_" + index1].currentFrame == 2)
               {
                  sendCmd(this._commdId,[24,11 + index1],function():void
                  {
                     refresh();
                  });
               }
         }
      }
      
      override protected function updatePanel() : void
      {
         var forever_105783:int;
         var requireNumArr:Array;
         var num:int;
         var frame:int;
         var i:int;
         this._commdId = getValue("comId")[0];
         forever_105783 = int(getValue("forever_105783"));
         requireNumArr = getValue("requireNumArr");
         if(BitUtils.getBit(forever_105783,4) == 0)
         {
            sendCmd(this._commdId,[24,1],function():void
            {
               refresh();
            });
            return;
         }
         num = int(KTool.subByte(forever_105783,0,4));
         _mainUI.numTx.text = num + "/12";
         frame = int(num / 12 * 100) > 0 ? int(num / 12 * 100) : 1;
         _mainUI.barMc.gotoAndStop(frame);
         for(i = 0; i < 6; i++)
         {
            if(BitUtils.getBit(forever_105783,10 + i) > 0)
            {
               _mainUI["rewardMc_" + i].gotoAndStop(3);
               _mainUI["reNumMc_" + i].gotoAndStop(2);
            }
            else if(num >= requireNumArr[i])
            {
               _mainUI["rewardMc_" + i].gotoAndStop(2);
               _mainUI["reNumMc_" + i].gotoAndStop(2);
            }
            else
            {
               _mainUI["rewardMc_" + i].gotoAndStop(1);
               _mainUI["reNumMc_" + i].gotoAndStop(1);
            }
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

