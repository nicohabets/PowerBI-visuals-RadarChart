﻿/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

import {dataViewObjectsParser} from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

import {legendInterfaces} from "powerbi-visuals-utils-chartutils";
import LegendPosition = legendInterfaces.LegendPosition;

export class RadarChartSettings extends DataViewObjectsParser {
    public legend: LegendSettings = new LegendSettings();
    public labels: LabelSettings = new LabelSettings();
    public dataPoint: DataPointSettings = new DataPointSettings();
    public line: LineSettings = new LineSettings();
    public displaySettings: DisplaySettings = new DisplaySettings();
}

export class LegendSettings {
    public show: boolean = true;
    public showTitle: boolean = true;
    public titleText: string = "";
    public labelColor: string = "black";
    public fontSize: number = 8;
    public position: string = LegendPosition[LegendPosition.Top];
}

export class DataPointSettings {
    public fill: string = "";
    public useOpacity: boolean = false;
    public showDots: boolean = false;
}

export class LabelSettings {
    public show: boolean = true;
    public color: string = "#000";
    public fontSize: number = 8;
}

export class LineSettings {
    public show: boolean = false;
    public lineWidth: number = 5;
}

export class DisplaySettings {
    public minValue: number = 0;
    public axisBeginning: number = -1;
}
